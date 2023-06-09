const NewTaskView = (props) => {
  const { handleChange, handleSubmit, error, isComplete } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Task
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority: </label>
          <input type="text" name="priority" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Is Complete: </label>
          <input type="checkbox" name="isComplete" checked={isComplete} onChange={(e) => handleChange(e)} />
          <br/>
          <br/>
          
          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error !== "" && <p>{error}</p>}
      </div>
    </div>
  );
}

export default NewTaskView;
