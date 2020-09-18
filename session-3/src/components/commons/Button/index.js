import theme from './button.module.scss';

const Button = ({
    children,
    fullWidth,
    btnDanger,
    btnWhite,
    btnTransparent,
    onClick,
}) => {

    var classNames = [
        theme.button,
        fullWidth ? theme.button__full_width : null,
        btnDanger ? theme.button__danger : null,
        btnWhite ? theme.button__white : null,
        btnTransparent ? theme.button__transparent : null,
    ].filter(Boolean).join(" ");

    return (
        <>
            <button className={classNames} onClick={onClick}>
                {children}
            </button>
        </>
    );
};
export default Button;
