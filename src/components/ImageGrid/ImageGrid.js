import React, { Component } from 'react';
//added
import {connect} from 'react-redux';

import './styles.css';
/*import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";*/
/*import mapStateToProps from "react-redux/lib/connect/mapStateToProps";*/

import {loadUsers} from "../../actions";

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    /*state = {
        images: [],
    };*/

    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images,
                });
            });
    }

    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    <a onClick={this.props.loadUsers}>Load Users</a>

                </section>
            </div>
        );
    }
}

const  mapStateToProps = ({isLoading, users, error}) => ({
    isLoading,
    users,
    error
});

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(loadUsers()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
