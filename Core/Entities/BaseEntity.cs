namespace Core.Entities
{
    // Base Entity class to save us from writing duplicate fields in each Entity class
    public class BaseEntity
    {
        public int Id { get; set;}
    }
}