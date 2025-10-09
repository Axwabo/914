using System.Text.Json.Serialization;

namespace RecipeExtractor.Converters;

public abstract class WriteOnlyJsonConverter<T> : JsonConverter<T>
{

    public sealed override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException();

}
