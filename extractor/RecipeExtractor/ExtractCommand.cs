using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using CommandSystem;
using InventorySystem;
using InventorySystem.Items;
using Scp914.Processors;

namespace RecipeExtractor;

[CommandHandler(typeof(GameConsoleCommandHandler))]
public sealed class ExtractCommand : ICommand
{

    public string Command => "914recipes";
    public string[] Aliases { get; } = [];
    public string Description => "Extracts SCP-914 recipes";

    public bool Execute(ArraySegment<string> arguments, ICommandSender sender, out string response)
    {
        var recipes = new Dictionary<string, Scp914Recipe>();
        foreach (var kvp in InventoryItemLoader.AvailableItems)
            if (kvp.Value.TryGetComponent(out Scp914ItemProcessor processor))
                recipes[kvp.Key.GetName()] = RecipeTransformer.GetRecipe(processor);

        using (var writer = File.OpenWrite("scp914.json"))
            JsonSerializer.Serialize(writer, recipes);

        response = "Recipes written to the server directory.";
        return true;
    }

}
