const Title = () => {
  return (
    <>
      {' '}
      <div className='relative z-[9] mt-0 mr-0 mb-0 ml-[-30px] rounded-br-sm rounded-bl-sm p-4 px-[40px] shadow md:pt-[15px] md:pr-[15px] md:pb-[15px] md:pl-[30px]  lg:pt-[15px] lg:pr-[15px] lg:pb-[15px] lg:pl-[30px]'>
        <div className=' row'>
          <div className=' min-[1px] relative float-left contents w-full pl-[15px] pr-[15px] after:clear-both '>
            <h2 className=' m-0 break-words px-0 pt-0 pb-[10px] text-[35px] font-[700] leading-[37px] tracking-normal text-[#0c1827] '>
              Juan Lopez
            </h2>
            <p className=' m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
              <div>
                Consultor en relaciones interpersonales, habilidades sociales y
                psicólogo.
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
