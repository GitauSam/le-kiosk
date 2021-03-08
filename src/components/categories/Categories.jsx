import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { commerce } from '../../lib/commerce'

const Categories = ({ onFetchProducts }) => {

    const classes = useStyles();
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {

        const retrieveCategories = async () => {
            try {

                const { data } = await commerce.categories.list();

                setCategories(data);

            } catch (error) {

                // console.log(error);

            }
        }

        retrieveCategories();

    }, [])

    return (
        <div className={classes.category}>
            <List component="nav" aria-label="main categories">
                <ListItem button onClick={() => onFetchProducts(null)}
                    key = '1'
                >
                    <ListItemText primary="All Categories" />
                </ListItem>
                {
                    categories.map(
                        (c) => (
                            c.products > 0 &&
                            <ListItem button
                                key = {c.id}
                                onClick={() => onFetchProducts(c.id)}
                            >
                                <ListItemText primary={c.name} />
                            </ListItem>
                        )
                    )
                
                }
            </List>
        </div>
    )
}

export default Categories
