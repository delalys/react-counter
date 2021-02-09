import React, { Component} from 'react';


class ElementSettings extends Component {
    state = {
        value: '',
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value});
    }
    
    render() {       
        const isSettingsClass = this.props.settingsOpen ? "is-open" : '';

        return(
            <div className={"settings " + isSettingsClass}>
                <form
                    className="modify-form"
                    onSubmit={(e) => {
                        this.props.modifyElement(e, this.state.value, this.props.index)
                        this.setState({ value: '' });
                        this.props.toggleSettings(this.props.id)
                    }}
                >
                    <div className="settings__item">
                        <span className="settings__title" style={{color: this.props.color1}}>Name:</span>
                            <input
                                value={this.state.value}
                                type="text" 
                                placeholder="Enter a new name"
                                onChange={this.handleChange}
                            />
                    </div>
                    <div className="settings__item">
                        <span className="settings__title" style={{color: this.props.color1}}>Color:</span>
                        {this.props.gradients.map((element, index) => {
                            let color1 = this.props.gradients[index].color1;
                            let color2 = this.props.gradients[index].color2;
                            let classActiveColor = (index === this.props.gradientIndex) ? 'color-example active' : 'color-example';
                            return <span 
                                        className={classActiveColor}
                                        key={index}
                                        onClick={ () => this.props.changeColor(this.props.index, index)}
                                        style={{backgroundImage: `linear-gradient(190deg, ${color1} 0%, ${color2} 100%)`}}
                                    ></span>
                        })}
                    </div>
                    <div className="settings__item">
                        <span className="settings__title" style={{color: this.props.color1}}>Delete:</span>
                        <div
                            className="btn btn-danger"
                            onClick={() => this.props.handleRemove(this.props.index)}
                        >
                            Delete
                        </div>
                    </div>
                    <hr/>
                    <div className="settings__item">
                        <input
                            value="Save and close"
                            className="btn btn-primary"
                            style={{background: this.props.color1}}
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default ElementSettings;