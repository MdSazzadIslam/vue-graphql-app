import { IResolvers } from "@graphql-tools/utils";
import { GraphQLResolveInfo } from "graphql";
import Machine from "../../../machinedata.json";
import Sensor from "../../../sensorData.json";
import { IMachine } from "../../types";

const miningResolver: IResolvers = {
  Query: {
    machines: async (
      root: any,
      args: any,
      context: any,
      _info: GraphQLResolveInfo,
    ): Promise<any> => {
      try {
        return Machine;
      } catch (err) {
        throw new Error(err);
      }
    },
    machine: async (
      root: any,
      args: any,
      context: any,
      _info: GraphQLResolveInfo,
    ): Promise<any> => {
      try {
        return Machine.filter(item => item.id === args.id);
      } catch (err) {
        throw new Error(err);
      }
    },

    sensorData: async (
      root: any,
      args: any,
      context: any,
      _info: GraphQLResolveInfo,
    ): Promise<any> => {
      try {
        return Sensor;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    addMachine: async (root: any, args: any, context: any): Promise<any> => {
      try {
        //Need to implemented
        return null;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
export default miningResolver;
