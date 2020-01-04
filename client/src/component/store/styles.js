import {makeStyles}  from '@material-ui/styles'

const centerStyleObject = {
    display:'flex',
    alignItems: 'center',
    //justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh', 
        flexDirection: 'column',
        ...centerStyleObject
    }

});