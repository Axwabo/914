using System.IO;
using System.Text.Json.Serialization;
using CommandSystem;
using InventorySystem;
using InventorySystem.Items;

namespace RecipeExtractor;

[CommandHandler(typeof(GameConsoleCommandHandler))]
public sealed class ExtractCommand : ICommand
{

    private static readonly JsonSerializerOptions Options = new(JsonSerializerDefaults.Web)
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
    };

    public string Command => "914recipes";
    public string[] Aliases { get; } = [];
    public string Description => "Extracts SCP-914 recipes";

    public bool Execute(ArraySegment<string> arguments, ICommandSender sender, out string response)
    {
        var recipes = new Dictionary<string, Scp914Recipe>();

        foreach (var kvp in InventoryItemLoader.AvailableItems)
            if (kvp.Value.TryGetComponent(out Scp914ItemProcessor processor))
                recipes[kvp.Key.GetName()] = RecipeTransformer.GetRecipe(processor);

        using (var writer = File.Create("scp914.json"))
            JsonSerializer.Serialize(writer, recipes, Options);

        response = "Recipes written to the server directory.";
        return true;
    }

}
