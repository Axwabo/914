using System;
using LabApi.Loader.Features.Plugins;

namespace RecipeExtractor;

public sealed class RecipeExtractorPlugin : Plugin
{

    public override string Name => "RecipeExtractor";
    public override string Description => "Extracts SCP-914 recipes";
    public override string Author => "Axwabo";
    public override Version Version => GetType().Assembly.GetName().Version;
    public override Version RequiredApiVersion { get; } = new(1, 0, 0);

    public override void Enable()
    {
    }

    public override void Disable()
    {
    }

}
