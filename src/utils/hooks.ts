import { useEffect, useMemo, useState } from 'react';
import { LightstreamerClient, Subscription } from 'lightstreamer-client-web';
import { GEO, LLA, Vector3, ENG } from '../math/vector';
import { ecefToLla } from '../math/math';
import { list, hash } from './data_dictionary';

const client = new LightstreamerClient(
  'https://push.lightstreamer.com',
  'ISSLIVE',
);
const SCHEMA = ['TimeStamp', 'Value', 'Status.Class', 'CalibratedData'];

client.connect();

const subscription = new Subscription('MERGE', list, SCHEMA);
client.subscribe(subscription);

export const useISSCoordinates = (): LLA => {
  const [pos, setPos] = useState<Vector3>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    subscription.addListener({
      onItemUpdate: (update) => {
        // console.log('UPDATE');
        // console.log(update);
        switch (update.getItemName()) {
          case 'USLAB000032':
            setPos((p) => ({ ...p, x: +update.getValue('Value') * 1000 }));
            break;
          case 'USLAB000033':
            setPos((p) => ({ ...p, y: +update.getValue('Value') * 1000 }));
            break;
          case 'USLAB000034':
            setPos((p) => ({ ...p, z: +update.getValue('Value') * 1000 }));
            break;
        }
      }
    });
  }, []);

  const issLLA = useMemo(() => ecefToLla(pos), [pos]);
  return issLLA;
};



// const map: MapType = {};
// map['a'] = 'b';
// map['c'] = 'd';

// TODO: @VAIKUNDH
// instead of a Pos vector thats just lenght 3, have some arbitrary sized list with all the data
export const useGeometryData = (): GEO => {
  type MapType = { 
    [id: string]: number; 
  }
  const [geometryData, setGeometryData] = useState<GEO>({Rw:0,Rx:0,Ry:0, Rz:0});

  useEffect(() => {
    subscription.addListener({
      onItemUpdate: (update) => {
        // console.log('UPDATE');
        // console.log(update);
        // do some update based on the update.getItemname(), look at the example above in ISSCordinates
        switch (update.getItemName()) {
          case 'USLAB000018':
            setGeometryData((p) => ({ ...p, Rw: +update.getValue('Value')}));
            break;
          case 'USLAB000019':
            setGeometryData((p) => ({ ...p, Rx: +update.getValue('Value')}));
            break;
          case 'USLAB000020':
            setGeometryData((p) => ({ ...p, Ry: +update.getValue('Value')}));
            break;
          case 'USLAB000021':
            setGeometryData((p) => ({ ...p, Rz: +update.getValue('Value')}));
            break;
        }
      }
    });
  }, []);

  const issGEO = useMemo(() => (geometryData), [geometryData]);
  return issGEO;
};

// export const useCurrentAll = (): number => {
//   return useEnergyData().S4000002 
//   + useEnergyData().S6000005 
//   + useEnergyData().P4000002 
//   + useEnergyData().P6000005 
//   + useEnergyData().S4000005 
//   + useEnergyData().S6000002 
//   + useEnergyData().P4000005 
//   + useEnergyData().P6000002
// }


export const useEnergyData = (): ENG => {
  type MapType = { 
    [id: string]: number; 
  }
  const [energyData, setEnergyData] = useState<ENG>({S4000002: 0, S6000005: 0, P4000002: 0, P6000005: 0, S4000005: 0, S6000002: 0, P4000005: 0, P6000002: 0});

  useEffect(() => {
    subscription.addListener({
      onItemUpdate: (update) => {
        // console.log('UPDATE');
        // console.log(update);
        // do some update based on the update.getItemname(), look at the example above in ISSCordinates
        switch (update.getItemName()) {
          case 'S4000002':
            setEnergyData((p) => ({ ...p, S4000002: +update.getValue('Value')}));
            break;
          case 'S6000005':
            setEnergyData((p) => ({ ...p, S6000005: +update.getValue('Value')}));
            break;
          case 'P4000002':
            setEnergyData((p) => ({ ...p, P4000002: +update.getValue('Value')}));
            break;
          case 'P6000005':
            setEnergyData((p) => ({ ...p, P6000005: +update.getValue('Value')}));
            break;
          case 'S4000005':
            setEnergyData((p) => ({ ...p, S4000005: +update.getValue('Value')}));
            break;
          case 'S6000002':
            setEnergyData((p) => ({ ...p, S6000002: +update.getValue('Value')}));
            break;
          case 'P4000005':
            setEnergyData((p) => ({ ...p, P4000005: +update.getValue('Value')}));
            break;
          case 'P6000002':
            setEnergyData((p) => ({ ...p, P6000002: +update.getValue('Value')}));
            break;
          
        }
      }
    });
  }, []);

  const issENG = useMemo(() => (energyData), [energyData]);
  return issENG;
};



