import React from 'react';

const PersonalDataCheck = () => {
    return (
      <div>
        <label htmlFor="personaldata">
          <a 
            href="#personal_data" 
            className="hover:text-quarteryColor transition-opacity">
            Acepto el tratamiento de datos personales
          </a>
        </label>
        <input
          type="checkbox"
          id="personaldata"
          name="personaldata"
          required
          value="SI"
        />
      </div>
    );
  }
export default PersonalDataCheck