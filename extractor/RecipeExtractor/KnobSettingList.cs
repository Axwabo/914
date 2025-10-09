using System.Text;
using Scp914;

namespace RecipeExtractor;

public record struct KnobSettingList(bool Rough, bool Coarse, bool OneToOne, bool Fine, bool VeryFine)
{

    public static KnobSettingList From(params IEnumerable<Scp914KnobSetting> settings)
    {
        var list = new KnobSettingList();
        foreach (var setting in settings)
        {
            list.Rough |= setting == Scp914KnobSetting.Rough;
            list.Coarse |= setting == Scp914KnobSetting.Coarse;
            list.OneToOne |= setting == Scp914KnobSetting.OneToOne;
            list.Fine |= setting == Scp914KnobSetting.Fine;
            list.VeryFine |= setting == Scp914KnobSetting.VeryFine;
        }

        return list;
    }

    public static implicit operator KnobSettingList(Scp914KnobSetting setting) => From(setting);

    public override string ToString()
    {
        var sb = new StringBuilder();
    }

}
