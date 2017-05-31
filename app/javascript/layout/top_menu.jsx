import React from 'react'

export class TopMenuItem extends React.Component {
    render() {
        return <a href="{this.props.href}">
            {this.props.label}
        </a>
    }
}

export class TopMenu extends React.Component {
    render() {
        return <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <a href="#" className="material-icons">menu</a>
                    <span className="mdc-toolbar__title">Twitter React</span>
                </section>
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
                    <TopMenuItem href="#" label="Home" />
                    <TopMenuItem href="#" label="Replies" />
                    <TopMenuItem href="#" label="My Account" />
                </section>
            </div>
        </header>;
    }
}
