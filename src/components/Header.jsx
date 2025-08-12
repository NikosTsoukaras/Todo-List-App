import LIST_ICON from "../assets/list-icon.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__icon-wrapper">
                <img className="header__icon" src={LIST_ICON} alt="list icon" />
            </div>
            <h1 className="header__title">Todo List App</h1>
            <p className="header__text">
                Create your task(s) and get organized today.
            </p>
        </header>
    );
}
