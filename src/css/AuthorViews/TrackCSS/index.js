const TrackCSS = (theme) =>({
    main:{
        flexGrow: 1, 
        p: 3, 
        width: { sm: `calc(100% - 240px)` }, 
        mt: 5 
    },
    paper:{
        p:4
    },
    tableRow:{
        bgcolor:theme.components.palette.background.list
    },
    tableCell:{
        color:theme.components.palette.secondary.text
    },
});
export default TrackCSS;