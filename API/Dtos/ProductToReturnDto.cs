namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public Decimal Price { get; set; }

        public String PictureUrl { get; set; }

        public String ProductType { get; set; }

        public String ProductBrand { get; set; }

    }
}