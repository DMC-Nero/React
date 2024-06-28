function Hello() {
    let myName = 'Nero';
    let number = 999;
    let fullName = () => {
        return 'DMC Nero';
    }
    return <h3>MessageNo:{number} I am your Hero {fullName()}</h3>
}
export default Hello;