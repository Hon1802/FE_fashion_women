import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Drawer, message } from 'antd';
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard(props) {
    const {item} = props;
    const [open, setOpen] = React.useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    // message
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
        key,
        type: 'Đang thêm',
        content: 'Đợi 1 tí ...',
        });
        setTimeout(() => {
        messageApi.open({
            key,
            type: 'success',
            content: 'Đã thêm',
            duration: 2,
        });
        }, 2000);
    };
  return (      
    <Card sx={{ maxWidth: '100%' }}>
        <Link to={`/products/${item.id}`}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image= {item.img_1}
                alt={item.tittle}
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div className='d-inline-flex' style={{gap:'20px'}}>
                        <p style={{paddingBottom:'0px'}}>
                            {item.price}
                        </p>
                        <p style={{paddingBottom:'0px', textDecoration:'line-through'}}>
                            {item.compare_price}
                        </p>
                    </div>
                    
                </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
        <CardActions>
            <Button onClick={showDrawer} size="small" color="primary">
            Thêm giỏ hàng
            </Button>
        </CardActions>
        <Drawer title="Thêm vào giỏ hàng" onClose={onClose} open={open}>
            
            <div className='row '>
                <div className='col-5 text'>
                    <img alt='img' src={item.img_1} style={{width:'100%'}}/>
                </div>
                <div className='col-7 text'>
                    <h4 className='text'>{item.title}</h4>
                    <h4 className='text'>{item.price}</h4>
                </div>
            </div>

            <div className='row '>
                <div className='col-5 text'>
                    Bạn đã thêm:
                </div>
                <div className='col-7 text'>
                    1 sản phẩm
                </div>
            </div>
            <div className='row'>
                <div className='col-5 text'>
                    Tổng thanh toán:
                </div>
                <div className='col-7 text'>
                    7,000,000
                </div>
            </div>
            {contextHolder}
            <Button type="primary" onClick={openMessage}>
                Add to cart
            </Button>
        </Drawer>
    </Card>
  );
}