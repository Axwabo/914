using System.Text.Json.Serialization;

namespace RecipeExtractor;

[Flags]
[JsonConverter(typeof(JsonStringEnumConverter<KnobSettings>))]
public enum KnobSettings : byte
{

    None = 0,
    Rough = 1 << 0,
    Coarse = 1 << 1,

    [JsonStringEnumMemberName("1:1")]
    OneToOne = 1 << 2,
    Fine = 1 << 3,

    [JsonStringEnumMemberName("Very Fine")]
    VeryFine = 1 << 4,

}
