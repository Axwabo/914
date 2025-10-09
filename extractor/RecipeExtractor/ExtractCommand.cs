using System.IO;
using System.Text.Json.Serialization;
using CommandSystem;
using InventorySystem;
using RecipeExtractor.Converters;

namespace RecipeExtractor;

[CommandHandler(typeof(GameConsoleCommandHandler))]
public sealed class ExtractCommand : ICommand
{

    private static readonly JsonSerializerOptions Options = new(JsonSerializerDefaults.Web)
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        Converters =
        {
            new ItemTypeConverter()
        }
    };

    public string Command => "914recipes";
    public string[] Aliases { get; } = [];
    public string Description => "Extracts SCP-914 recipes";

    public bool Execute(ArraySegment<string> arguments, ICommandSender sender, out string response)
    {
        var recipes = new Dictionary<ItemType, Recipe>();

        foreach (var (itemType, item) in InventoryItemLoader.AvailableItems)
        {
            if (!item.TryGetComponent(out Scp914ItemProcessor processor))
                continue;
            var recipe = RecipeTransformer.GetRecipe(processor, itemType);
            if (recipe != null)
                recipes[itemType] = recipe;
        }

        using (var writer = File.Create("scp914.json"))
            JsonSerializer.Serialize(writer, recipes, Options);

        response = "Recipes written to the server directory.";
        return true;
    }

}
