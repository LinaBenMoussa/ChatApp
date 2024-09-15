// eslint-disable-next-line react/prop-types
const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox"  className="checkbox m-1" checked={selectedGender==='male'} onChange={()=>onCheckBoxChange("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox m-1" checked={selectedGender==='female'} onChange={()=>onCheckBoxChange("female")} />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
