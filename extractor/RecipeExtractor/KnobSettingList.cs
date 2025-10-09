using System.Text.Json.Serialization;
using RecipeExtractor.Converters;
using Scp914;

namespace RecipeExtractor;

[JsonConverter(typeof(KnobSettingListConverter))]
public sealed record KnobSettingList(bool Rough, bool Coarse, bool OneToOne, bool Fine, bool VeryFine)
{

    public static implicit operator KnobSettingList(Scp914KnobSetting setting) => setting switch
    {
        Scp914KnobSetting.Rough => new KnobSettingList(true, false, false, false, false),
        Scp914KnobSetting.Coarse => new KnobSettingList(false, true, false, false, false),
        Scp914KnobSetting.OneToOne => new KnobSettingList(false, false, true, false, false),
        Scp914KnobSetting.Fine => new KnobSettingList(false, false, false, true, false),
        Scp914KnobSetting.VeryFine => new KnobSettingList(false, false, false, false, true),
        _ => new KnobSettingList(false, false, false, false, false)
    };

    public static implicit operator KnobSettingList(Scp914KnobSetting[] settings) => new(
        settings.Contains(Scp914KnobSetting.Rough),
        settings.Contains(Scp914KnobSetting.Coarse),
        settings.Contains(Scp914KnobSetting.OneToOne),
        settings.Contains(Scp914KnobSetting.Fine),
        settings.Contains(Scp914KnobSetting.VeryFine)
    );

    public override string ToString() => this switch
    {
        (true, false, false, false, false) => "Rough",
        (false, true, false, false, false) => "Coarse",
        (false, false, true, false, false) => "1:1",
        (false, false, false, true, false) => "Fine",
        (false, false, false, false, true) => "Very Fine",
        (true, true, false, false, false) => "Rough,Coarse",
        (true, false, true, false, false) => "Rough,1:1",
        (true, false, false, true, false) => "Rough,Fine",
        (true, false, false, false, true) => "Rough,Very Fine",
        (false, true, true, false, false) => "Coarse,1:1",
        (false, true, false, true, false) => "Coarse,Fine",
        (false, true, false, false, true) => "Coarse,Very Fine",
        (false, false, true, true, false) => "1:1,Fine",
        (false, false, true, false, true) => "1:1,Very Fine",
        (false, false, false, true, true) => "Fine,Very Fine",
        (true, true, true, false, false) => "Rough,Coarse,1:1",
        (true, true, false, true, false) => "Rough,Coarse,Fine",
        (true, true, false, false, true) => "Rough,Coarse,Very Fine",
        (true, false, true, true, false) => "Rough,1:1,Fine",
        (true, false, true, false, true) => "Rough,1:1,Very Fine",
        (true, false, false, true, true) => "Rough,Fine,Very Fine",
        (false, true, true, true, false) => "Coarse,1:1,Fine",
        (false, true, true, false, true) => "Coarse,1:1,Very Fine",
        (false, true, false, true, true) => "Coarse,Fine,Very Fine",
        (false, false, true, true, true) => "1:1,Fine,Very Fine",
        (true, true, true, true, false) => "Rough,Coarse,1:1,Fine",
        (true, true, true, false, true) => "Rough,Coarse,1:1,Very Fine",
        (true, true, false, true, true) => "Rough,Coarse,Fine,Very Fine",
        (true, false, true, true, true) => "Rough,1:1,Fine,Very Fine",
        (false, true, true, true, true) => "Coarse,1:1,Fine,Very Fine",
        (true, true, true, true, true) => "Rough,Coarse,1:1,Fine,Very Fine",
        _ => ""
    };

}
