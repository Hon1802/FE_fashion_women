
import React, { useState } from 'react';
import { Select } from 'antd';
import Map from "../../components/ggMap";
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const listStore =[
    {
        province: 'Hà Nội',
        value: 'Chi nhánh Ba Đình',
        address: '2R75+85W, Láng Hạ, Đống Đa, Hà Nội, Việt Nam',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
    {
        province: 'Hà Nội',
        value: 'Chi nhánh Cầu Giấy',
        address: '222 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội 100000, Việt Nam',
        YOUR_LONGITUDE: '21.007402',
        YOUR_LATITUDE:'105.7906523'
    },
    {
        province: 'Hà Nội',
        value: 'Chi nhánh Hàng Trống',
        address:'46 QL32, Tân Tây Đô, Đan Phượng, Hà Nội, Việt Nam',
        YOUR_LONGITUDE: '21.0742021',
        YOUR_LATITUDE:'105.694908'
    },
    {
        province: 'Đà Nẵng',
        value: 'Chi nhánh Pasteur',
        address: '58 Pasteur, Quận Hải Châu, Đà Nẵng',
        YOUR_LONGITUDE: '16.0698641',
        YOUR_LATITUDE:'108.2153874'
    },
    {
        province: 'Đà Nẵng',
        value: 'Chi nhánh Ngũ Hành Sơn',
        address: '169 Ngũ Hành Sơn, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
    {
        province: 'Đà Nẵng',
        value: 'Chi nhánh Phan Đình Phùng',
        address: '23 Phan Đình Phùng, Phường Phước Ninh, Quận Hải Châu, Đà Nẵng',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
    {
        province: 'Hồ Chí Minh',
        value: 'Chi nhánh Quận Gò Vấp',
        address: '150 Nguyễn Duy Cung, phường 15, quận Gò Vấp, HCM',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
    {
        province: 'Hồ Chí Minh',
        value: 'Chi nhánh Quận Phú Nhuận',
        address: '123B Phan Đình Phùng, Phường 17, Phú Nhuận, Thành phố Hồ Chí Minh, Vietnam',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
    {
        province: 'Hồ Chí Minh',
        value: 'Chi nhánh Quận 10',
        address: '222 Đường 3/2, Phường 12 (Quận 10), Quận 10, Thành phố Hồ Chí Minh',
        YOUR_LONGITUDE: '21.0167155',
        YOUR_LATITUDE:'105.8069712'
    },
]
const ShopSystem = () => {
    const key = 'yourKey'
    const [province, setProvince] = useState('Hà Nội')
    const [branch, setBranch] = useState('Chi nhánh Ba Đình')
    const [longtitude, setLongtitude] = useState('21.0167155')
    const [latitude, setlatitude] = useState('105.8069712')
    const [addressStore, setAddressStore] = useState('2R75+85W, Láng Hạ, Đống Đa, Hà Nội, Việt Nam')

    const onChange = (value) => {
        console.log(`selected ${value}`);
        const filteredStores = listStore.filter(item => item.province === value);

        if (filteredStores.length > 0) {
            const firstStore = filteredStores[0];
            setLongtitude(firstStore.YOUR_LONGITUDE);
            setlatitude(firstStore.YOUR_LATITUDE);
            setAddressStore(firstStore.address);
        }
        
        setProvince(value);
      };
    const onChange_2 = (value, long, la) => {
        console.log(`selected ${value}`);
        const filteredStores = listStore.filter(item => item.value === value);

        if (filteredStores.length > 0) {
            const firstStore = filteredStores[0];
            setLongtitude(firstStore.YOUR_LONGITUDE);
            setlatitude(firstStore.YOUR_LATITUDE);
            setAddressStore(firstStore.address);

        }
        setBranch(value);
      };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <>
        <div id="shop-system-page" className="dflex-center-column">
                <div className="w85-per">
                    <div className="content-top-page">
                        <ul className="d-inline-flex g-2"> 
                            <li>
                                <a href="/">
                                    <span className="text" style={{color:"#000000"}}>Trang chủ</span>
                                </a>
                            </li> 
                            <p>/</p>
                            <li>
                                <a href="/pages/he-thong-cua-hang">
                                    <span style={{color:"#BFBFBF"}} className="text">Hệ thống cửa hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <h3 className="title-page">Hệ thống cửa hàng</h3>
                    </div>
                    <div className="row custom-row-shop">
                        <div class="col-3 col-left">
                            <h3 className='text'>Tìm cửa hàng</h3>
                            <h4 className='text'>Chọn tỉnh thành</h4>
                            <Select
                                showSearch
                                placeholder="Chọn tỉnh thành"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                options={[
                                {
                                    value: 'Hà Nội',
                                    label: 'Hà Nội',
                                },
                                {
                                    value: 'Đà Nẵng',
                                    label: 'Đà Nẵng',
                                },
                                {
                                    value: 'Hồ Chí Minh',
                                    label: 'Hồ Chí Minh',
                                },
                                ]}
                                style={{
                                    width :'100%'
                                }}
                            />
                            <h4 className='text'>Chọn cửa hàng</h4>
                            <Select
                                showSearch
                                placeholder="Chọn cửa hàng"
                                optionFilterProp="children"
                                onChange={onChange_2}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                options={listStore.filter(item => item.province === province).map(item => ({ value: item.value, label: item.value }))}
                                style={{
                                    width :'100%'
                                }}
                            />
                            <span className='text'> 
                                Địa chỉ :
                                {listStore.filter(item => item.value === branch).map(item => (<span> {item.address}</span>))}
                            </span>
                            <p></p>
                        </div>
                        <div class="col-9">
                            <iframe
                                title='map'
                                width="100%"
                                height="100%"
                                frameborder="0"
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31763.945883780425!2d108.2153874!3d16.0698641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183420c6dfab%3A0xd38332774d11f1dc!2z${encodeURIComponent(addressStore)}!5e0!3m2!1sen!2suk!4v1649345807392!5m2!1sen!2suk`}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopSystem;