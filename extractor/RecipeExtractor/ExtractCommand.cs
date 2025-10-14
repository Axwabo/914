using System.IO;
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
            new ItemTypeConverter(),
            new ItemCategoryConverter()
        }
    };

    public string Command => "914";
    public string[] Aliases { get; } = [];
    public string Description => "Extracts SCP-914 recipes & data";

    public bool Execute(ArraySegment<string> arguments, ICommandSender sender, out string response)
    {
        var recipes = new Dictionary<ItemType, Recipe>();
        var items = new Dictionary<ItemType, Item>();

        foreach (var (itemType, item) in InventoryItemLoader.AvailableItems)
        {
            if (!item.TryGetComponent(out Scp914ItemProcessor processor))
                continue;
            items[itemType] = ItemTransformer.Transform(item);
            var recipe = RecipeTransformer.GetRecipe(processor, itemType);
            if (recipe != null)
                recipes[itemType] = recipe;
        }

        Write(recipes, "recipes");
        Write(items, "items");

        response = "Recipes written to the server directory.";
        return true;
    }

    private static void Write<T>(T data, string name)
    {
        using var writer = File.Create(name + ".json");
        JsonSerializer.Serialize(writer, data, Options);
    }

}
