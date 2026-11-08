import ProductGrid from "../../components/products/ProductGrid";
import * as IMAGE_LIST from "../../assets/home";
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import jsonData from '../../datas/data.json';
import { PRODUCT_GROUPS } from "../../datas/data_product";


const CollectionSummer = () => {
    // tab

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (Array.isArray(jsonData)) {
                jsonData.map((item, index) => {
                //   console.log(item);
                  return null;
                });
              }

          } catch (error) {
            console.error('Error fetching JSON file:', error);
          }
        };
    
        fetchData();
      }, []);

    const onChange = (key) => {
      };

    return (
        <>
            <div className="collection-container">
                
                <div className="collection-header">
                    <h2 className="text">Bộ sưu tập xuân hè</h2>
                </div>

                <div className="flash-body"> 
                    <Tabs items={[
                        { key: "1", label: "Hàng mới về", children: <ProductGrid items={PRODUCT_GROUPS.newest} /> },
                        { key: "2", label: "Bộ sưu tập hè", children: <ProductGrid items={PRODUCT_GROUPS.summer} /> },
                        { key: "3", label: "Bán chạy", children: <ProductGrid items={PRODUCT_GROUPS.bestSeller} /> }
                    ]} />
                </div>
                <div className="btn-botton-flash">
                    <button>Xem Tất Cả &gt; </button>
                </div>
            </div>
            
        </>
    );
};

export default CollectionSummer;
