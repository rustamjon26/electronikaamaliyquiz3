// circuit-checker.js
function detectFault(circuitData) {
    let faults = [];
    for (let i = 0; i < circuitData.length; i++) {
      if (circuitData[i].voltage === 0 && circuitData[i].shouldBeOn) {
        faults.push({ component: circuitData[i].name, reason: "No voltage" });
      }
    }
    return faults;
  }
  