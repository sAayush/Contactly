namespace Contactly.Models
{
    public class AddContactDTO
    {
        public string Name { get; set; }
        public string? Email { get; set; }
        public long Phone { get; set; }
        public bool Favorite { get; set; }
    }
}
