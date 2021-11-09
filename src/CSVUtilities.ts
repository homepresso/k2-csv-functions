import "@k2oss/k2-broker-core";
/*import {stringFunctions, executeStringFunctions} from "./so_StringFunctions";
import {anyFCGMethod, executeanyFCGMethod} from "./so_AnyMethod";
import {graphQL, executeGraphql} from "./so_Graphql";
import {inspectionReport, executeInspectionReport} from "./so_InspectionReport"*/
import {csvFunctions, onexecuteCSVFunctions} from "./csv"
import {jobFunctions, onexecuteJobFunctions} from "./sfJob"

metadata = {
  systemName: "ReadCSVasJSON",
  displayName: "Read CSV as JSON",
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
      //stringFunctions, anyFCGMethod, graphQL, inspectionReport, sfqlFunctions
      csvFunctions, jobFunctions
    }
  });
};

onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
  switch(objectName){
    /*case "stringFunctions" : await executeStringFunctions(methodName, properties, parameters, configuration); break;
    case "anyFCGMethod" : await executeanyFCGMethod(methodName, properties, parameters, configuration); break;
    case "graphQL" : await executeGraphql(methodName, properties, parameters, configuration); break;
    case "inspectionReport" : await executeInspectionReport(methodName, properties, parameters, configuration); break;*/
    case "csvFunctions" : await onexecuteCSVFunctions(methodName, properties, parameters, configuration); break;
    case "jobFunctions" : await onexecuteJobFunctions(methodName, properties, parameters, configuration); break;
    default: throw new Error("The object " + objectName + " is not supported.");
  }
}
