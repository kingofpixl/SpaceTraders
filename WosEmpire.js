const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS0lOR09GUElYTCIsInZlcnNpb24iOiJ2MiIsInJlc2V0X2RhdGUiOiIyMDIzLTA2LTEwIiwiaWF0IjoxNjg2NjkxMTU4LCJzdWIiOiJhZ2VudC10b2tlbiJ9.jJNAfKTbYrOl7flA2Q8Dmes2JHkTO8SWR4kjvmxGQBAbEyip8ntKcSRuZ2nYUdSbJgpx6NWGQqSI6yJwPOOTfnW6MBjWD3WzvI225-SAq1JPGxvnG6Lp0Rhx49HvrRkeqSB0pFuaTmmpQ6IF_iXiwSDxbzDAfd-l-RZ_9LrhKtFT9Iv4W78HVDcv2RWcWVHT-DlK9u8HTvOCKCtPNbTEWriN95heKpx2F9-JUufF5UQA3UXNYJuLugqgoprdKRO2LXNm4LDrfx2TwuKM2CrFQYBqnMC1IDS_YtPcLd-og3aBPqMeWBoOTUySb00wmek0zWyNKgtn78QRwLrcxOG9-g"

//agents data
const agentData = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
};

function getElement(id) {
  return document.getElementById(id);
}
fetch('https://api.spacetraders.io/v2/my/agent', agentData)
  .then(res => res.json())
  .then((res) => {
    const data = res.data;
    getElement('accountId').innerHTML =  'accountId: ' + data.accountId;
    getElement('symbol').innerHTML = 'Symbol: ' + data.symbol;
    getElement('headquarters').innerHTML = 'headquarters: ' + data.headquarters;
    getElement('credits').innerHTML = 'credits: ' + data.credits;
    getElement('startingFaction').innerHTML = 'startingFaction: ' + data.startingFaction;
  })
  .catch(err => console.error(err));



  /*
//view starting location
const startSector = "Xl"
const startSystem = "X1-KS52"
const startWaypoint = "X1-KS52-07960X"

const location = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
};
  
fetch('https://api.spacetraders.io/v2/systems/X1-KS52/waypoints/X1-KS52-07960X', location)
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(err => console.error(err));
  //view contract
  const viewContract = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS0lOR09GUElYTCIsInZlcnNpb24iOiJ2MiIsInJlc2V0X2RhdGUiOiIyMDIzLTA2LTEwIiwiaWF0IjoxNjg2NjkxMTU4LCJzdWIiOiJhZ2VudC10b2tlbiJ9.jJNAfKTbYrOl7flA2Q8Dmes2JHkTO8SWR4kjvmxGQBAbEyip8ntKcSRuZ2nYUdSbJgpx6NWGQqSI6yJwPOOTfnW6MBjWD3WzvI225-SAq1JPGxvnG6Lp0Rhx49HvrRkeqSB0pFuaTmmpQ6IF_iXiwSDxbzDAfd-l-RZ_9LrhKtFT9Iv4W78HVDcv2RWcWVHT-DlK9u8HTvOCKCtPNbTEWriN95heKpx2F9-JUufF5UQA3UXNYJuLugqgoprdKRO2LXNm4LDrfx2TwuKM2CrFQYBqnMC1IDS_YtPcLd-og3aBPqMeWBoOTUySb00wmek0zWyNKgtn78QRwLrcxOG9-g'
    },
  };
  
  fetch('https://api.spacetraders.io/v2/my/contracts', viewContract)
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response.data, null, 2)))
    .catch(err => console.error(err));*/
  
    //my contracts
    /*const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS0lOR09GUElYTCIsInZlcnNpb24iOiJ2MiIsInJlc2V0X2RhdGUiOiIyMDIzLTA2LTEwIiwiaWF0IjoxNjg2NjkxMTU4LCJzdWIiOiJhZ2VudC10b2tlbiJ9.jJNAfKTbYrOl7flA2Q8Dmes2JHkTO8SWR4kjvmxGQBAbEyip8ntKcSRuZ2nYUdSbJgpx6NWGQqSI6yJwPOOTfnW6MBjWD3WzvI225-SAq1JPGxvnG6Lp0Rhx49HvrRkeqSB0pFuaTmmpQ6IF_iXiwSDxbzDAfd-l-RZ_9LrhKtFT9Iv4W78HVDcv2RWcWVHT-DlK9u8HTvOCKCtPNbTEWriN95heKpx2F9-JUufF5UQA3UXNYJuLugqgoprdKRO2LXNm4LDrfx2TwuKM2CrFQYBqnMC1IDS_YtPcLd-og3aBPqMeWBoOTUySb00wmek0zWyNKgtn78QRwLrcxOG9-g'
      },
    };
    
    fetch('https://api.spacetraders.io/v2/my/contracts/cliusd7by2fsls60dl21epnxd/accept', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));*/
    
      //list ships
      /*
      const shipData = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      };
      
      fetch('https://api.spacetraders.io/v2/my/ships', shipData)
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response.data, null, 2)))
        .catch(err => console.error(err));*/