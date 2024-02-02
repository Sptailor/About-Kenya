document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("loaded");

    let displayTitle = document.querySelector("#econ-heading");
    let displayInfo = document.querySelector("#eco-info");

let agri = document.getElementById("agri");
    
    
    let tour = document.getElementById('tour');
    let mine = document.getElementById('mine');
    let energy = document.getElementById('energy');
    let tech = document.getElementById('tech');
    let trans = document.getElementById('transport');

   let pic=document.querySelector("#eco-image");
   let pic_info=document.querySelector("#E-img-info");

    agri.addEventListener("click", function () {
        displayTitle.textContent = "Agriculture";
        displayInfo.textContent="Kenya's agriculture is a cornerstone of its economy, featuring a diverse range of crops and activities. Renowned globally for its tea and coffee production, the country is a major exporter of horticultural products, particularly flowers, fruits, and vegetables. Maize serves as a vital staple, ensuring food security for the nation. Livestock farming, including cattle, goats, sheep, and poultry, is widespread. Fisheries thrive in the lakes and the Indian Ocean, contributing significantly to the economy. Challenges such as unpredictable weather patterns and inadequate infrastructure persist, but the government actively supports the sector through initiatives like cooperative societies and agribusiness promotion. With a focus on technology adoption and value addition, Kenya's agriculture plays a pivotal role in sustaining livelihoods and fostering economic growth.";
      
        let vis=document.querySelector("#eco-vis");
        vis.innerHTML='';
        vis.innerHTML='<img id="eco-image" src="images/Ke-tea.jpg" alt="Kenyan tea plantation" max-width="60%" height="400px">'


        pic_info.textContent="Tea plantations are a vital component of Kenya's agricultural landscape, contributing significantly to the country's economy. The high-altitude regions, such as Kericho and Nandi Hills, provide ideal conditions for tea cultivation. Kenya is one of the world's largest producers and exporters of tea, with the industry playing a key role in foreign exchange earnings. The smallholder tea farming model, alongside large estates, ensures widespread participation and income generation in rural areas. ";
  
        let pic=document.querySelector("#eco-image");
        pic.classList.add("fade-in");

    });




    tour.addEventListener("click", function () {
        displayTitle.textContent = "Tourism";
        displayInfo.textContent="Kenya's tourism sector is a key player in the country's economic activities, contributing significantly to foreign exchange earnings and employment. Renowned for its breathtaking landscapes, diverse wildlife, and vibrant cultural heritage, Kenya attracts millions of visitors annually. The national parks and reserves, including the iconic Maasai Mara and Amboseli, showcase the richness of Africa's wildlife, making the country a premier safari destination. Coastal areas like Mombasa offer pristine beaches and historical sites, further enhancing Kenya's appeal. The tourism industry supports various related businesses, such as hospitality, transportation, and souvenir trade, contributing to the overall economic vitality of the nation. Despite occasional challenges, Kenya's commitment to sustainable tourism practices and conservation efforts continues to position the sector as a crucial driver of economic growth.";
       let vis=document.querySelector("#eco-vis");
       vis.innerHTML='';
       vis.innerHTML='<video src="images/Ke-vid1.mp4" controls max-width="60%" height="500px" autoplay muted></video>;'

        pic.src="images/Ke-mara2.jpg";

        pic.alt=""
        pic_info.textContent="The tourism industry plays a pivotal role in job creation, offering employment opportunities to individuals in various sectors such as hospitality, tourism services, and conservation. Tourism is a major source of foreign exchange for Kenya. Revenue generated from international tourists contributes significantly to the country's balance of payments ";
        let pic=document.querySelector("#eco-image"); 
        pic.classList.add("fade-in");

    });



    mine.addEventListener("click", function () {
        displayTitle.textContent = "Mining and Extractive Industries";
        displayInfo.textContent="Mining and extractive industries play a significant role in Kenya's economic landscape. The country is rich in mineral resources, with notable deposits including soda ash, fluorspar, titanium, and gemstones. The mining sector contributes to both domestic and foreign investment, fostering economic diversification. Mineral exploration and extraction are prominent in regions like the coastal areas and parts of the Rift Valley. The extraction of soda ash from Lake Magadi, for instance, is a major industrial activity. Gemstone mining, particularly for precious stones like tsavorite and ruby, adds to the sector's economic impact. While the mining industry faces challenges such as regulatory frameworks and environmental concerns, Kenya is actively working on addressing these issues to ensure sustainable and responsible resource utilization. Overall, mining remains a vital component of Kenya's economic activities, contributing to revenue generation and job creation.";
        let vis=document.querySelector("#eco-vis");
        vis.innerHTML='';
        vis.innerHTML='<img id="eco-image" src="images/Ke-stone.jpg" alt="Mining" max-width="60%" height="400px">'
    

        pic_info.textContent="Soapstone carving is a traditional and highly regarded art form in Kenya, with the Kisii region being particularly renowned for its soapstone artisans .The soapstone industry not only preserves cultural heritage but also provides economic opportunities for the artisans and contributes to the tourism and handicraft sectors in Kenya. Visitors to Kenya often seek out soapstone carvings as unique and meaningful mementos of their experience in the region."
        let pic=document.querySelector("#eco-image"); 
        pic.classList.add("fade-in");


    });

 
    energy.addEventListener("click", function () {
        displayTitle.textContent = "Energy";
        displayInfo.textContent="The energy sector in Kenya is a dynamic and rapidly growing component of the country's economic activities. Kenya has made substantial strides in diversifying its energy mix to address power shortages and promote sustainable development. The nation has been a pioneer in harnessing renewable energy sources, with a particular focus on geothermal, wind, and solar power. The Geothermal Development Company (GDC) has played a crucial role in tapping into the country's vast geothermal potential, making Kenya one of the leading geothermal energy producers globally. The Lake Turkana Wind Power Project is Africa's largest wind power project, contributing significantly to the national grid. Additionally, solar power initiatives, such as the Kenya Off-Grid Solar Access Project, are extending electricity access to rural areas. The government's commitment to renewable energy and initiatives like the Last Mile Connectivity Project have propelled Kenya towards achieving its energy goals, fostering economic growth and providing sustainable energy solutions for its citizens.";
      

        let vis=document.querySelector("#eco-vis");
        vis.innerHTML='';
        vis.innerHTML='<img id="eco-image" src="images/Ke-ngong.jpeg" alt="Wind mill" max-width="60%" height="400px">'




       
        pic_info.textContent="These turbines harness the region's consistent and strong winds, generating renewable energy for the country. The Ngong Hills Wind Power Station is a significant contributor to Kenya's efforts to diversify its energy sources and promote sustainability. The wind farm, with its iconic turbines dotting the landscape, symbolizes Kenya's commitment to green energy and reducing reliance on fossil fuels. Ngong Hills has become a symbol of Kenya's strides in renewable energy development, showcasing the potential for wind power in the region.";
        let pic=document.querySelector("#eco-image");
        pic.classList.add("fade-in"); 
   
    });




   tech.addEventListener("click", function () {
        displayTitle.textContent = "Infromation Technology and Innovation";
        displayInfo.textContent="Information technology (IT) is a rapidly expanding sector in Kenya, contributing significantly to the country's economic activities and fostering innovation. Nairobi, the capital city, has earned the nickname Silicon Savannah due to its vibrant tech ecosystem. The IT industry encompasses a wide range of activities, including software development, mobile applications, cybersecurity, and fintech services. Kenya has experienced remarkable success in mobile banking, with the introduction of services like M-Pesa revolutionizing financial inclusion and transforming the way transactions are conducted. The government has implemented initiatives to promote the growth of the IT sector, including creating innovation hubs and providing support for tech startups. The rise of co-working spaces and tech incubators further underscores Kenya's commitment to becoming a technology hub in the region. As digital connectivity continues to expand, the IT sector in Kenya is poised for sustained growth, driving economic advancement and positioning the country as a leader in technological innovation on the African continent.";
      
        let vis=document.querySelector("#eco-vis");
        vis.innerHTML='';
        vis.innerHTML='<img id="eco-image" src="images/Ke-mpesa.png" alt="technology in kenya" max-width="60%" height="400px">'

      
       
        pic_info.textContent="M-Pesa is a mobile money service in Kenya allowing users to deposit, withdraw, and transfer money using their mobile phones. Launched in 2007, it has become a widely adopted financial tool, promoting financial inclusion and transforming the way transactions are conducted. M-Pesa operates through a network of agents, enabling users to access financial services conveniently."
        let pic=document.querySelector("#eco-image"); 
        pic.classList.add("fade-in"); 
    
    });

    trans.addEventListener("click", function () {
        displayTitle.textContent = "Transport and Logistics";
        displayInfo.textContent="Transport and logistics play a crucial role in Kenya's economic activities, facilitating the movement of goods and people across the country and connecting it to regional and international markets. The transportation infrastructure includes a network of roads, railways, airports, and seaports. The road network is extensive, connecting urban centers and rural areas, while ongoing investments in railway infrastructure, such as the Standard Gauge Railway (SGR), aim to enhance efficiency in cargo and passenger transport. Major airports like Jomo Kenyatta International Airport in Nairobi and Moi International Airport in Mombasa contribute to air travel and cargo operations. Kenya's strategic location in East Africa positions it as a key transportation hub for the region. The efficient functioning of the transport and logistics sector is essential for trade, economic growth, and regional integration. The government continues to invest in infrastructure projects to improve connectivity, reduce transportation costs, and bolster the overall efficiency of the sector."
     
        let vis=document.querySelector("#eco-vis");
        vis.innerHTML='';
        vis.innerHTML='<img id="eco-image" src="images/Ke-town.jpg" alt="Train in Kenya" max-width="60%" height="400px">'


     
        
        pic_info.textContent=" Matatus, often minivans or minibuses, are ubiquitous in both urban and rural areas, offering an affordable and convenient means of commuting. Kenya's matatu and bus systems contribute significantly to the country's ongoing development across various sectors. These public transportation networks enhance accessibility, connecting urban and rural areas and thereby opening up economic opportunities for individuals. By providing efficient and reliable transportation, matatus and buses support urban development initiatives, creating transportation hubs that stimulate local business growth. "
        let pic=document.querySelector("#eco-image");
        pic.classList.add("fade-in");
    });
   
    



























}
