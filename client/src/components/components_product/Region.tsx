import { useEffect, useState } from "react";
import { Select, Skeleton, notification } from 'antd';
import { scaleLinear } from "d3-scale";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import axiosInstance from "../axios";
import Trends from "./Trends";
import Topics from "./Topics";
import { Carousel_Product } from "./Carousel";


const geoUrl: string = "/features.json";

const colorScale = scaleLinear<string>()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

interface RegionData {
  geo: string;
  location: string;
  value: number;
}
interface RegionDataR {
  geo: string;
  location: string;
  value: number;
  originalValue: number;
}
interface TypeRegion {
  searchValue: string;
}

const Region: React.FC<TypeRegion> = ({ searchValue }) => {
  const [data, setData] = useState<RegionData[] | null>(null);
  const [dataR, setDataR] = useState<RegionDataR[] | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `product/${searchValue}/region_data`
    axiosInstance.get(url)
      .then(response => {
        setData(response.data);
        api.success({
          message: 'Paises identificados',
          description: 'Espere por favor',
          duration: 8
        });
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const maximoValor = Math.max(...data.map(item => item.value));
      const dataActualizado = data.map(item => ({
        ...item,
        value: item.value / maximoValor,
        originalValue: item.value
      }));
      setDataR(dataActualizado);
    }
  }, [data]);

  const onChange = (value: string) => {
    setSelectedRegion(value);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const [content, setContent] = useState("");
  return (
    <>
      {contextHolder}
      <Carousel_Product />
      <div>
        {isLoading && <Skeleton active/>}
        {data && dataR && (
          <div>
            <div>
              <div  style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginTop: '40px' }}>GeoTrend Lex Map</div>
              <ComposableMap
                projectionConfig={{
                  rotate: [-10, 0, 0],
                  scale: 100
                }}
                style={{
                  marginTop: "-200px",
                  marginBlockEnd: '-150px'
                }}
              >
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} id={""} fill={""} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                {dataR.length > 0 && (
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const d = dataR.find((s) => s.location === geo.properties.name);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={d ? colorScale(d.value) : "#F5F4F6"}
                            onMouseEnter={() => {
                              setContent('Interés en ' + `${geo.properties.name}` + ': ' + `${d?.originalValue ?? 0}`);
                            }}
                            onMouseLeave={() => {
                              setContent("");
                            }}
                            style={{
                              hover: {
                                fill: "#0EA5E9",
                                outline: "none"
                              }
                            }}
                            data-tooltip-id="my-tooltip-1"
                          />
                        );
                      })
                    }
                  </Geographies>
                )}
              </ComposableMap>
              <Tooltip id="my-tooltip-1">{content}</Tooltip>
            </div>
            <div>
              <Select
                showSearch
                placeholder="Selecciona un país"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
              >
                {data.map((item, index) => (
                  <Select.Option key={index} value={item.geo}>
                    {item.location}
                  </Select.Option>
                ))}
              </Select>
              <div style={{ display: 'flex' }}>
                <div>
                  <div style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom: '30px' , marginTop:'30px'}}>GeoTrend Lex Trends</div>
                  <Trends searchValue={searchValue} idRegion={selectedRegion} />
                </div>
                <div style={{ marginLeft: '100px' }}>
                  <div style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom: '30px' , marginTop:'30px' }}>GeoTrend Lex Topics</div>
                  <Topics searchValue={searchValue} />
                </div>
              </div>
            </div>
          </div>

        )}
      </div>
    </>
  );
};

export default Region;
