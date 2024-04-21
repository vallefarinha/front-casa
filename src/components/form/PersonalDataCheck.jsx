import React from 'react';

const PersonalDataCheck = () => {
    return (
      <div>
        <input
          type="checkbox"
          id="personaldata"
          name="personaldata"
          required
          value="SI"
        />
        <label htmlFor="personaldata">
          <a 
            href="#personal_data" 
            className="hover:text-quarteryColor transition-opacity">
            Acepto el tratamiento de datos personales
          </a>
        </label>
      </div>
    );
  }
export default PersonalDataCheck