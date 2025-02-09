import React from 'react';
import Card from '../../common/card/Card';
import Advertisement from '../../common/advertisement/Advertisement';
import './CustomerDashboard.css';
import { useNavigate } from 'react-router-dom'


import barber1 from '../../../assets/images/barber1.jpeg';
import barber2 from '../../../assets/images/barber2.jpeg';
import barber3 from '../../../assets/images/barber3.jpeg';
import barber4 from '../../../assets/images/barber4.jpeg';
import { getAllBarbers } from '../../../api/CustomerApi';

const barberShops = [
  {
    title: 'Barber Shop 1',
    description: 'High-quality haircuts and grooming.',
    image: barber1,
    rating: 4.5,
  },
  {
    title: 'Barber Shop 2',
    description: 'Affordable prices with great service.',
    image: barber2,
    rating: 3,
  },
  {
    title: 'Barber Shop 3',
    description: 'Expert stylists for modern looks.',
    image: barber3,
    rating: 5,
  },
  {
    title: 'Barber Shop 4',
    description: 'Classic cuts and shaves.',
    image: barber4,
    rating: 4,
  },
  {
    title: 'Barber Shop 5',
    description: 'Friendly staff and cozy atmosphere.',
    image: barber3,
    rating: 3.5,
  },
  {
    title: 'Barber Shop 6',
    description: 'Friendly staff and cozy atmosphere.',
    image: barber4,
    rating: 3.7,
  },
  {
    title: 'Barber Shop 7',
    description: 'Friendly staff and cozy atmosphere.',
    image: barber1,
    rating: 4.5,
  },
  {
    title: 'Barber Shop 8',
    description: 'Friendly staff and cozy atmosphere.',
    image: barber2,
    rating: 2.5,
  },
  {
    title: 'Barber Shop 9',
    description: 'Friendly staff and cozy atmosphere.',
    image: barber4,
    rating: 3,
  },
];

const CustomerDashboard = () => {
  const [barberShop, setBarberShop] = React.useState([]);
  const navigate = useNavigate();

    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    React.useEffect(() => {
        console.log("in customer get Barbers useEffect !")
        handleGetBarbers();
    },[])


    const handleGetBarbers = async () => {
        const result = await getAllBarbers();
        if (result && result.status === 204) {
          setBarberShop([]); // Handle the case where there's no content by setting data to an empty array
        } else {
          setBarberShop(result?.data || []); // Set data to the response data or an empty array if undefined
        }
    }

    const handleSelection = async (shopId) => {
      navigate(`/customer/book/appointment/${shopId}`)
    }

    React.useEffect(() => {
        console.log(barberShop)
    },[barberShop])

  return (
    <div className="row justify-content-between ms-3">
      <div className="col-md-9 mt-4">
            <div className='row'>
              {barberShop.map((shop) => (
                    <div className='col-md-4 mb-4' type="button" onClick={() => handleSelection(shop.id)}>
                      <Card
                        key={shop.id}
                        shopName={shop.shopName}
                        description={shop.description}
                        shopImg={shop.shopImg}
                        mobile={shop.mobile}
                        />
                    </div>
                  ))}
            </div>
        </div>

        <div className="col-md-3 d-none d-md-block position-relative">
          <div className="position-fixed h-100">
            <Advertisement />
          </div>
        </div>
    </div>
  )
};

export default CustomerDashboard;
