


        var testData = localStorage.getItem('FinalDestinationLat');
        console.log(testData +" gfgfggfgfg");

        var data="a";
       
       function getStartingAiport(){
           
        fetch("https://api.lufthansa.com/v1/references/airports/nearest/51.5,-0.142", {
                "method": "GET",
                "headers": {
                    Accept: 'application/json',
                    Authorization: 'Bearer u8jj22u82esttbg5by6pajgw'
                }
            })
             .then(response =>  {
                const test = response.json().then(response2 =>{
                    const test1 = response2.NearestAirportResource.Airports.Airport[0].AirportCode;
                    
                    
                    
                });
                
                
            })
            .catch(err => {
                console.log(err);
            });
       }  

       
       getStartingAiport();
       //getDesinationAiport();



        // async function GetData(){
        //     const data = await fetch ('https://api.lufthansa.com/v1/references/airports/nearest/51.5,-0.142');
        //     const realData = data.json();
        //     console.log(realData);
        // }
        // GetData();

   
        // fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-09-04", {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        //             "x-rapidapi-key": ""
        //         }
        //     })
        //     .then(response => {
        //         const test = response.json()

        //         console.log(test);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        // async function GetData() {

        // }
   
