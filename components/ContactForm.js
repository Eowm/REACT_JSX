var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <label className={'label'}>
          First name:
          <input type:'text' placeholder:'First Name' value={this.props.contact.firstName}/>
        </label>
        <label className={'label'}>
          First name:
          <input type:'text' placeholder:'Last Name' value={this.props.contact.lastName}/>
        </label>
        <label className={'label'}>
          Email:
          <input type:'email' placeholder:'Email' value={this.props.contact.email}/>
        </label>
        <button type: 'submit'>
          Add contact
        </button>
      </form>
      )
  },
})