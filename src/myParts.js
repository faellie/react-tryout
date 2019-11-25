import React from "react";

export default class ShoppingListPart extends React.Component
{
    render()
    {
        return (
            <div className="shopping-list">
                <h2>Shopping List for {this.props.name}</h2>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
