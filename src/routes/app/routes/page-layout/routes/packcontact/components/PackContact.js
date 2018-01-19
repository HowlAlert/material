
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class Contact extends React.Component {

  addTodo(event){
    event.preventDefault();
    let fname = this.refs.fname.value;
    let lname = this.refs.lname.value;
    let contact = this.refs.contact.value;
    let email = this.refs.mail.value;
    let counter = this.state.counter;
    counter++;

    let todo = {
      fname,
      lname,
      contact,
      email,
      counter
    };

    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
    todos: todos,
    counter: counter

  });
  this.refs.todoForm.reset();

  }


  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
      this.state = {
        todos:[],
       counter: 0
      };
  }



  render() {

      let todos = this.state.todos;

    return (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
        <center><h2 className="article-title">ADD NEW PACK MEMBER</h2></center>
         <form ref="todoForm">
                  <div className="form-group">
                     {/* <TextField hintText="FIRST NAME" fullWidth ref="fname" /> */}
                     <input type="text" ref="fname"  placeholder="FIRST NAME" />
                 </div>
                   <div className="form-group">
                       {/* <TextField hintText="LAST NAME" fullWidth ref="lname" /> */}
                        <input type="text" ref="lname"  placeholder="LAST NAME" />
                  </div>
                  <div className="form-group">
                    {/* <h4>+1  <TextField type="text" hintText="MOBILE PHONE" ref="contact"/></h4> */}
                    <input type="text" ref="contact"  placeholder="MOBILE PHONE" />

                 </div>
                   <div>
                          {/* <TextField hintText="EMAIL ADDRESS"  ref="mail" fullWidth /> */}

                          <input type="text" ref="mail"  placeholder="EMAIL ADDRESS"  />

                  </div>
                  <div className="divider" />
                  <RaisedButton primary label="SAVE"  onClick={this.addTodo}/>
       </form>
           <pre>
             {JSON.stringify(todos)}
           </pre>
           {/* <ul>
             {todos.map((todo =>
               <li key={todo.counter}> {todo.fname}</li>

             ))}
           </ul> */}

        </article>
      </div>
    </QueueAnim>
  </section>
   );
  }
}

const Page = () => {
  return (

    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Contact /></div>


      </QueueAnim>
    </section>
  )
}

module.exports = Page;
