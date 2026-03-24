export const categories = [
  {
    id: "hospital-uniform",
    name: "Hospital Uniforms",
    image: "/images/scrub.jpg",
    subcategories: [
      {
        id: "scrub",
        name: "Scrub Models",
        image: "/images/scrub.jpg",
      },
      {
        id: "lab-coat",
        name: "Lab Coat",
        image: "/images/labcoat.png",
    
      },
      {
        id: "doctor-coat",
        name: "Doctor Coat",
        image: "/images/doctorcout.jpg",
        // options: [
        //   { id: "half-sleeve", name: "Half Sleeve", image: "/images/doccoat/halfsleeve1.png" },
        //   { id: "full-sleeve", name: "Full Sleeve", image: "/images/doccoat/fullsleeve1.png" },
        // ],
      },
      {
        id: "tn-nursing-uniform",
        name: "TN GOVT Nursing Uniform",
        image: "/images/nurseuniform.jpg",
      },
      {
        id: "nursing-uniform",
        name: "Nursing Uniforms",
        image: "/images/nursing/nursing6.png",
      },
      {
        id: "theater-uniform",
        name: "Theater Uniforms",
        image: "/images/theateruniform.jpg",
        
      },
      { id: "bed-sheet-pillow", name: "Bed Sheet & Pillow cover", image: "/images/pillow.jpg" },
    ],
  },
  {
    id: "school-uniform",
    name: "School Uniforms",
    image: "/images/school_uniform_1773050312810.png",
    subcategories: [
      { id: "cbse", name: "CBSE", image: "/images/cbse.jpg" },
      { id: "matriculation", name: "Matriculation", image: "/images/metric.jpg" },
      { id: "government-school-uniform", name: "Government School Uniform", image: "/images/goverment.jpg" },
      { id: "nss", name: "NSS, NCC & Scout", image: "/images/nss.png" },
    ],
  },
  {
    id: "college-uniform",
    name: "College Uniforms",
    image: "/images/college_uniform_1773050352464.png",
    subcategories: [
      { id: "pant-shirt", name: "Pant & Shirt", image: "/images/college.jpg" },
      { id: "blazers", name: "Blazers", image: "/images/blazar.png" },
      { id: "lab-coat", name: "Lab Coat", image: "/images/labcoutuniform.png" },
    ],
  },
  {
    id: "industrial-uniform",
    name: "Industrial Uniforms",
    image: "/images/industry.jpg",
    subcategories: [
      { id: "technision-uniform", name: "Technision Uniform", image: "/images/staffuniform.jpg" },
      { id: "labour-uniform", name: "Labour Uniform", image: "/images/labouruniform.jpg" },
      { id: "security-uniform", name: "Security Uniform", image: "/images/securityuniform.jpg" },
      { id: "fire-vendor-uniform", name: "Fire Retardant Uniform", image: "/images/fireuniform.png" },
      { id: "staff-uniform", name: "Staff Uniform", image: "/images/staff.png" },
    ],
  },
  {
    id: "hotel-uniform",
    name: "Hotel Uniforms",
    image: "/images/hotel_uniform_1773050385922.png",
    subcategories: [
      { id: "front-office-uniform", name: "Front Office Uniform", image: "/images/frontoffice.png" },
      { id: "chef-uniform", name: "Chef Uniform", image: "/images/chefuniform.jpg" },
      { id: "butler-uniform", name: "Bulter Uniform", image: "/images/bulteruniform.png" },
      { id: "house-cleaning-uniform", name: "House Keeping Uniform", image: "/images/cleaninguniform.jpg" },
      { id: "security-uniform", name: "Security Uniform", image: "/images/hotelsecuniform.jpg" },
    ],
  },
  
  {
    id: "home-furniture",
    name: "Home Furnishing",
    image: "/images/homef.jpeg",
    subcategories: [
      {
        id: "bath-towels",
        name: "Bath Towels - 75cm*150cm",
        image: "/images/homefuriture/bathtowel.jpg",
        
      },
      {
        id: "bed-sheet-pillow-covers",
        name: "Bed Sheet - 60*90/90*100/108*108 inches with Pillow Covers - 18*27 inches",
        image: "/images/homefuriture/pillow.jpg",
       
      },
    ],
  },
  {
    id: "fabrics",
    name: "Woven Fabrics  ",
    image: "images/fabrics.jpg",
    subcategories: [
      { id: "yes", name: "100% Linen-Solid/Stripes,checked & Printed", image: "/images/fabric/fabric1.jpg" },
      { id: "no", name: "100% Modal-Solid/Stripes,checked & Printed", image: "/images/fabric/fabric2.jpg" },
      { id: "maybe", name: "All type of Yarn dyed , Fabric dyed & Printed fabrics. ", image: "/images/fabric/fabric3.jpg" },
      { id: "may", name: "Specilized Category", image: "/images/fabric/fabric4.png" },
      // { id: "maybe", name: "Fire retardant Finished ", image: "/images/fabric/fabric2.jpg" },
      // { id: "maybe", name: "Water & Stain repellant ", image: "/images/fabric/fabric2.jpg" },
      // { id: "maybe", name: "Wrinkle free", image: "/images/fabric/fabric2.jpg" },
    ],
  },
];

// Helper to get dummy products for a given category/subcategory/option
export const getProducts = (categoryId, subcategoryId, optionId = null) => {
//   // Generate a seed based on the IDs to have consistent images
  const seed = `${categoryId}-${subcategoryId}-${optionId || ""}`;

  return Array.from({ length: 12 }).map((_, i) => ({
    id: `prod-${seed}-${i}`,
    title: `Code : ${i + 1}`,
    image: `https://picsum.photos/seed/${seed}-${i}/600/800`,
  }));
};

export const productImages = {
  "bed-sheet-pillow": [
    { title: "code : 1", image: "/images/pillowbed/tri.png" },
    { title: "code : 2", image: "/images/pillowbed/tri2.png" },
    { title: "code : 3", image: "/images/pillowbed/tri3.png" },
    { title: "code : 4", image: "/images/pillowbed/tri4.png" },
  ],

  "doctor-coat":[
             {  title: "Half Sleeve", image: "/images/doccoat/halfsleeve1.png" },
          { title: "Full Sleeve", image: "/images/doccoat/fullsleeve1.png" },
  ],
  "tn-nursing-uniform":[
          {  title: "Chudidhar with Coat", image: "/images/tnnurse/chudicout.png" },
          {  title: "Pant / Shirt", image: "/images/tnnurse/girlsshirt.png" },
          {  title: "Pant / Shirt", image: "/images/tnnurse/girl.png" },
          { title: "Pant / Shirt", image: "/images/tnnurse/girl2.png" },
    

  ],
  "theater-uniform":[
{ title: "Surgical Item", image: "/images/therateruniform/all.png" },
          {  title: "pyjamma set", image: "/images/therateruniform/pyjammaset.jpeg" },
          {  title: "orthopaedic Apron", image: "/images/therateruniform/ortho.jpeg" },
          {  title: "large leggins 18 inches * 36 inches", image: "/images/therateruniform/largeleggin.png" },
  ],

  "nursing-uniform": [
    { title: "code : 1", image: "/images/nursing/nursing1.png" },
    { title: "code : 2", image: "/images/nursing/nursing2.png" },
    { title: "code : 3", image: "/images/nursing/nursing3.png" },
    { title: "code : 4", image: "/images/nursing/nursing4.png" },
    { title: "code : 5", image: "/images/nursing/nursing5.png" },
  ],

  "government-school-uniform": [
    { title: "code : 1", image: "/images/governmentuni/1.png" },
    { title: "code : 2", image: "/images/governmentuni/6.png" },
    { title: "code : 3", image: "/images/governmentuni/9.png" },
    { title: "code : 4", image: "/images/governmentuni/11.png" },
  ],

  cbse: [
    { title: "code : 1", image: "/images/cbse/cbse1.png" },
    { title: "code : 2", image: "/images/cbse/cbse2.png" },
    { title: "code : 3", image: "/images/cbse/cbse3.png" },
    { title: "code : 4", image: "/images/cbse/cbse4.png" },
    { title: "code : 5", image: "/images/cbse/cbse5.png" },
  ],

  "nss": [
    { title: "code : 1", image: "/images/nss/nss1.png" },
    { title: "code : 2", image: "/images/nss/nss2.png" },
    { title: "code : 3", image: "/images/nss/nss3.png" },
  ],

  "college-uniform": [
    { title: "Pant & Shirt", image: "/images/college/college1.png" },
    { title: "Pant & Shirt", image: "/images/college/college2.png" },
    { title: "Pant & Shirt", image: "/images/college.jpg" },
    { title: "Blazers", image: "/images/blazar.png" },
    { title: "Lab Coat", image: "/images/labcoutuniform.png" },
  ],
  "chef-uniform":[
        { title: "code : 1", image: "/images/hoteluniform/chef1.png" },
        { title: "code : 1", image: "/images/hoteluniform/chef2.png" },
        // { title: "code : 1", image: "/images/hoteluniform/chef3.png" },
        { title: "code : 1", image: "/images/hoteluniform/chef4.png" },
        { title: "code : 1", image: "/images/hoteluniform/chef5.png" },
        { title: "code : 1", image: "/images/hoteluniform/chef6.png" },

  ],
  "butler-uniform":[
        { title: "code : 1", image: "/images/hoteluniform/bulter1.png" },
        { title: "code : 1", image: "/images/hoteluniform/bulter2.png" },
        { title: "code : 1", image: "/images/hoteluniform/bulter3.png" },

  ],
  "house-cleaning-uniform":[
            { title: "code : 1", image: "/images/hoteluniform/house1.png" },
            { title: "code : 1", image: "/images/hoteluniform/house2.png" },

  ],
  "maybe":[
    {  title: "Fire retardant Finished ", image: "Fire retardant Finished.jpg" },
      { title: "Water & Stain repellant ", image: "/images/Water & Stain repellant.jpg" },
      {  title: "Wrinkle free", image: "/images/Wrinkle free" },
    ],
  "bath-towels":[
 {  title: "100% Combed Cotton ", image: "/images/homefuriture/towel1.jpg" },
          {  title: "100% Cotton Premium Waffle ", image: "/images/homefuriture/towel2.jpg" },
          {  title: "Viscose/Bamboo blended", image: "/images/homefuriture/towel3.jpg" },
  ],
  "bed-sheet-pillow-covers":[
 {  title: "Satin Stripes", image: "/images/homefuriture/pillow1.jpg" },
          {  title: "Yarn Byed Stripes", image: "/images/homefuriture/pillow2.jpg" },
          { title: "Jaquard ", image: "/images/homefuriture/pillow3.jpg" },
  ]
};