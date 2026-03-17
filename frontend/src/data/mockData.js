export const categories = [
  {
    id: "hospital-uniform",
    name: "Hospital Uniform",
    image: "/images/hospital_uniform_1773050292494.png",
    subcategories: [

      {
  id: "scrub",
  name: "Scrub",
  image: "/images/scrub.jpg",
  options: [
    { id: "half-sleeve", name: "Half Sleeve",image: "/scrubs/scrubs1.jpg" },
    { id: "full-sleeve", name: "Full Sleeve",image:"/images/formals.jpg" },
  ],
},
      {
        id: "lab-coat",
        name: "Lab Coat",
        image: "/images/labcout.jpg",
        options: [
          { id: "half-sleeve", name: "Half Sleeve",image:"/images/formals.jpg" },
          { id: "full-sleeve", name: "Full Sleeve",image:"/images/formals.jpg" },
        ],
      },
      {
        id: "doctor-coat",
        name: "Doctor Coat",
        image: "/images/doctorcout.jpg",
        options: [
          { id: "half-sleeve", name: "Half Sleeve",image:"/images/formals.jpg" },
          { id: "full-sleeve", name: "Full Sleeve" ,image:"/images/formals.jpg"},
        ],
      },
      {
        id: "tn-nursing-uniform",
        name: "TN Nursing Uniform",
        image: "/images/nurseuniform.jpg",
        options: [
          { id: "chudidhar-with-coat", name: "Chudidhar with Coat",image:"/images/chudicout.jpg" },
          { id: "pant-shirt", name: "Pant / Shirt" ,image:"/images/girlsshirt.jpg"},
          { id: "thai-uniform", name: "Thai Uniform" ,image:"/images/tnnurseuniform.jpg"},
        ],
      },
      {
        id: "theater-uniform",
        name: "Theater Uniform",
        image: "/images/theateruniform.jpg",
        options: [
          { id: "cap", name: "Cap",image:"/images/therateruniform/doctorcap.jpg" },
          { id: "mask", name: "Mask",image:"/images/therateruniform/doctormask.jpg" },
          { id: "eye-pad", name: "Eye Pad",image:"/images/therateruniform/doctoreyepad.jpg" },
          { id: "shape-leggings", name: "Shape Leggings",image:"/images/therateruniform/doctorpant.jpg" },
          { id: "large-leggings", name: "Large Leggings",image:"/images/therateruniform/doctorlong.jpg" },
          { id: "abdominal-sheet", name: "Abdominal Sheet",image:"/images/therateruniform/sheet.jpg" },
          { id: "long-towel", name: "Long Towel",image:"/images/therateruniform/longtowel.jpg" },
          { id: "center-hole-towel", name: "Center Hole Towel",image:"/images/therateruniform/centertowel.jpg" },
        ],
      },
      { id: "bed-sheet-pillow", name: "Bed Sheet with Pillow",image: "/images/pillow.jpg" },
    ],
  },
  {
    id: "school-uniform",
    name: "School Uniform",
    image: "/images/school_uniform_1773050312810.png",
    subcategories: [
      { id: "government-school-uniform", name: "Government School Uniform" ,image:"/images/goverment.jpg"},
      { id: "matriculation", name: "Matriculation" ,image:"/images/metric.jpg"},
      { id: "cbse", name: "CBSE" ,image:"/images/cbse.jpg"},
      { id: "all-type-uniform-sarees", name: "All Type Uniform Sarees" ,image:"/images/saree.jpg"},
    ],
  },
  {
    id: "college-uniform",
    name: "College Uniform",
    image: "/images/college_uniform_1773050352464.png",
    subcategories: [
      { id: "pant-shirt", name: "Pant & Shirt",image:"/images/shirt.jpg" },
      { id: "blazers", name: "Blazers" ,image:"/images/blazer.jpg"},
      { id: "lab-coat", name: "Lab Coat",image:"/images/labcoutuniform.jpg" },
    ],
  },
  {
    id: "industrial-uniform",
    name: "Industrial Uniform",
    image: "/images/industry.jpg",
    subcategories: [
      { id: "staff-uniform", name: "Staff Uniform", image:"/images/industryuniform/staffuniform.jpg" },
      { id: "labour-uniform", name: "Labour Uniform", image:"/images/industryuniform/labouruniform.jpg" },
      { id: "security-uniform", name: "Security Uniform", image:"/images/industryuniform/securityuniform.jpg" },
      { id: "fire-vendor-uniform", name: "Fire Vendor Uniform",image:"/images/industryuniform/fireuniform.jpg" },
    ],
  },
  {
    id: "hotel-uniform",
    name: "Hotel Uniform",
    image: "/images/hotel_uniform_1773050385922.png",
    subcategories: [
      { id: "front-office-uniform", name: "Front Office Uniform" ,image:"/images/hoteluniform/frontoffice.jpg"},
      { id: "chef-uniform", name: "Chef Uniform" ,image:"/images/hoteluniform/chefuniform.jpg"},
      { id: "butler-uniform", name: "Biller Uniform" ,image:"/images/hoteluniform/billeruniform.jpg"},
      { id: "house-cleaning-uniform", name: "House Cleaning Uniform" ,image:"/images/hoteluniform/cleaninguniform.jpg"},
      { id: "security-uniform", name: "Security Uniform",image:"/images/hoteluniform/hotelsecuniform.jpg" },
    ],
  },
  {
    id: "formals",
    name: "Formals",
    image: "/images/formals.jpg",
    subcategories: [
      {
        id: "pant",
        name: "Pant",
        image:"/images/formals/formalpant.jpg",
        options: [
          { id: "cotton", name: "Cotton",image:"/images/formals/cotten.jpg" },
          { id: "linen", name: "Linen" ,image:"/images/formals/leninpant.jpg"},
        ],
      },
      {
        id: "shirt",
        name: "Shirt",
        image:"/images/formals/formalshirt.jpg",
        options: [
          { id: "cotton", name: "Cotton",image:"/images/formals/cottenshirt.jpg" },
          { id: "linen", name: "Linen",image:"/images/formals/leninshirt.jpg" },
        ],
      },
    ],
  },
  {
    id: "home-furniture",
    name: "Home Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    subcategories: [
      {
        id: "bath-towels",
        name: "Bath Towels",
        image:"/images/homefuriture/bathtowel.jpg",
        options: [
          { id: "cotton", name: "Cotton",image: "/images/homefuriture/towel1.jpg" },
          { id: "100-cotton", name: "100% Cotton",image:"/images/homefuriture/towel2.jpg" },
          { id: "bamboo", name: "Bamboo",image:"/images/homefuriture/towel3.jpg" },
        ],
      },
      {
        id: "bed-sheet-pillow-covers",
        name: "Bed Sheet with Pillow Covers",
        image:"/images/homefuriture/pillow.jpg",
        options: [
          { id: "satin", name: "Satin",image:"/images/homefuriture/pillow1.jpg" },
          { id: "yarn", name: "Yarn", image:"/images/homefuriture/pillow2.jpg" },
          { id: "features", name: "Features" ,image:"/images/homefuriture/pillow3.jpg"},
        ],
      },
    ],
  },
  {
    id: "fabrics",
    name: "Fabrics",
    image: "images/fabrics.jpg",
    subcategories: [
      { id: "yes", name: "100% cotten",image:"/images/fabric/fabric1.jpg" },
      { id: "no", name: "casual", image:"/images/fabric/fabric2.jpg" },
      {id:"maybe",name:"Printed",image:"/images/fabric/fabric2.jpg"}
    ],
  },
];

// Helper to get dummy products for a given category/subcategory/option
export const getProducts = (categoryId, subcategoryId, optionId = null) => {
  // Generate a seed based on the IDs to have consistent images
  const seed = `${categoryId}-${subcategoryId}-${optionId || ""}`;
  
  return Array.from({ length: 12 }).map((_, i) => ({
    id: `prod-${seed}-${i}`,
    title: `Code : ${i + 1}`,
    image: `https://picsum.photos/seed/${seed}-${i}/600/800`, // Professional placeholder
  }));
};
 export const productImages = {
  "scrub-half-sleeve": [
    { title : "code : 1",  image: "/scrubs/scrubshalf/scrubh1.jpg" },
    { title : "code : 2",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "code : 3",  image: "https://picsum.photos/seed/scrub-half-3/300/400" },
    { title : "code : 4",  image: "https://picsum.photos/seed/scrub-half-4/300/400" },
    { title : "code : 5",  image: "https://picsum.photos/seed/scrub-half-5/300/400" },
    { title : "code : 6",  image: "https://picsum.photos/seed/scrub-half-6/300/400" },
    { title : "code : 7",  image: "https://picsum.photos/seed/scrub-half-7/300/400" },
    { title : "code : 8",  image: "https://picsum.photos/seed/scrub-half-8/300/400" },
    { title : "code : 9",  image: "https://picsum.photos/seed/scrub-half-9/300/400" },
    { title : "code : 10", image: "https://picsum.photos/seed/scrub-half-10/300/400" },
    { title : "code : 11", image: "https://picsum.photos/seed/scrub-half-11/300/400" },
    { title : "code : 12", image: "https://picsum.photos/seed/scrub-half-12/300/400" },
  ],

  "scrub-full-sleeve": [
    { title : "Scrub Full Sleeve 1",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 2",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 3",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 4",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 5",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 6",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 7",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 8",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 9",  image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 10", image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 11", image: "https://picsum.photos/seed/scrub-half-2/300/400" },
    { title : "Scrub Full Sleeve 12", image: "https://picsum.photos/seed/scrub-half-2/300/400" },
  ],
  "lab-coat":[
           { title : "code : 1",  image:"https://picsum.photos/200/300"},
           { title : "code : 2",  image:"https://picsum.photos/200/300"},
           { title : "code : 3",  image:"https://picsum.photos/200/300"},
           { title : "code : 4",  image:"https://picsum.photos/200/300"},
           { title : "code : 5",  image:"https://picsum.photos/200/300"},
           { title : "code : 6",  image:"https://picsum.photos/200/300"},
           { title : "code : 7",  image:"https://picsum.photos/200/300"},
           { title : "code : 8",  image:"https://picsum.photos/200/300"},
           { title : "code : 9",  image:"https://picsum.photos/200/300"},
           { title : "code : 10",  image:"https://picsum.photos/200/300"},
           { title : "code : 11",  image:"https://picsum.photos/200/300"},
           { title : "code : 12",  image:"https://picsum.photos/200/300"},
          ],
}