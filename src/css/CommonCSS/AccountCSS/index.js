const AccountCSS = (theme) =>({
    main:{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        padding: 4,
        width: 400,
        position: 'relative' 
    },
    iconButton:{
        position: 'absolute',
        top: 8,
        right: 8,
        color: theme.components.palette.primary.main,
    },
    avatarContainer:{
        display: 'flex', 
        justifyContent: 'center', 
        mb: 2 
    },
    avatar:{
        bgcolor: theme.components.palette.primary.main, 
        width: 56, 
        height: 56
    },
    PasswordTextfield:{
        display: 'flex', 
        alignItems: 'center'
    }
});
export default AccountCSS;