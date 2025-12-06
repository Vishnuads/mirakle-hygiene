import React from 'react'

const Validation = (addressData) => {

    const newErrors = {};

    if (!addressData.title.trim()) newErrors.title = 'Title is required *';

    if (!addressData.cname.trim()) newErrors.cname = 'Receiver name is required';

    if (!addressData.contact1.trim()) {
      newErrors.contact1 = 'Contact number is required';
    } else if (addressData.contact1 && !/^\d{10}$/.test(addressData.contact1)) {
      newErrors.contact1 = 'Contact number must be 10 digits';
    }
    if (addressData.contact2 && !/^\d{10}$/.test(addressData.contact2)) {
      newErrors.contact2 = 'Alternative number must be 10 digits';
    }
    if (!addressData.door.trim()) newErrors.door = 'Door number is required';

    if (!addressData.street.trim()) newErrors.street = 'Street is required';

    if (!addressData.area.trim()) newErrors.area = 'Area is required';

    if (!addressData.city.trim()) newErrors.city = 'City is required';

    if (!addressData.state.trim()) newErrors.state = 'State is required';

    if (!addressData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(addressData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    if (!loginData.email.trim()) newErrors.email = "Email is required"

    if (!loginData.password.trim()) newErrors.password = "Password is required"
    
    return newErrors;
  };

export default Validation
