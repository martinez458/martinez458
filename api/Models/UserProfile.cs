namespace api.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        public string? Email { get; set; }

        public string? UserName { get; set; }

        public DateTime? BirthDate { get; set; }
    }
}
