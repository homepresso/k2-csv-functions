import "@k2oss/k2-broker-core";

import {csvFunctions, onexecuteCSVFunctions} from "./csv"

metadata = {
  systemName: "ReadCSVasK2Object",
  displayName: "Read CSV in K2",
  description: "A Utility broker using CSV in K2 Workflows",
  configuration : {
    "ServiceURL" : {
      "displayName": "Service URL",
      "type": "string",
      "value": "https://www.cloudfunctions.net"
    }
  }
};

ondescribe = async function ({ configuration }): Promise<void> {
  postSchema({
    objects: {
      csvFunctions
    }
  });
};

onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
  switch(objectName){
    case "csvFunctions" : await onexecuteCSVFunctions(methodName, properties, parameters, configuration); break;
    default: throw new Error("The object " + objectName + " is not supported.");
  }
}
