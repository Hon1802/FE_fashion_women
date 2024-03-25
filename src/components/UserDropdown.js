import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const UserDropdown = () => {

  return (
    <>
      <div className="user-container">
        <span id="icon-search" className='size-icon'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width= "100%"
            height="100%"
            fill="currentColor"
            viewBox="0 0 192.904 192.904"
          >
            <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"/>
          </svg>
        </span>
        <div id='icon-user' className='size-icon user-icon'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width= "100%"
            height="100%"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
          </svg>
          <div className='account-action'>
            <a href='/account/login'>Đăng nhập</a>
            <a href='/account/register'>Đăng ký</a>
          </div>
        </div>
        <div id='icon-heart' >
          <a href='/pages/wishlist' className='size-icon'>
            <FavoriteBorderIcon style={{ color: '#000' }} sx={{ fontSize: 27 }} />
          </a>
          <span title='Sản phẩm yêu thích'>0</span>
        </div>
        <div id='icon-cart' className='size-icon'>
          <a href='/cart'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= "100%"
              height="100%"
              fill="currentColor"
              viewBox="0 0 16 19"
            >
              <path d="M15.594 16.39a.703.703 0 0 1-.703.704h-.704v.703a.703.703 0 0 1-1.406 0v-.703h-.703a.703.703 0 0 1 0-1.407h.703v-.703a.703.703 0 1 1 1.406 0v.704h.704c.388 0 .703.314.703.703Zm0-10.968v6.75a.703.703 0 0 1-1.406 0V6.125H12.78v2.11a.703.703 0 1 1-1.406 0v-2.11h-6.75v2.11a.703.703 0 1 1-1.406 0v-2.11H1.813v10.969h7.453a.703.703 0 1 1 0 1.406H1.109a.703.703 0 0 1-.703-.703V5.422c0-.388.315-.703.703-.703h2.143A4.788 4.788 0 0 1 8 .5a4.788 4.788 0 0 1 4.748 4.219h2.143c.388 0 .703.315.703.703Zm-4.266-.703A3.38 3.38 0 0 0 8 1.906 3.38 3.38 0 0 0 4.672 4.72h6.656Z"></path>
            </svg>
          </a>
          <span>0</span>
          <div className='cart-item'>
            <ul>
              <li>
                <p>Không có sản phẩm nào.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDropdown
