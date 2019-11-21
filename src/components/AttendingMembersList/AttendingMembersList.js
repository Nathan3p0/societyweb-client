import React, { Component } from 'react';
import AdminApiService from '../../services/admin-api-service';
import AttendingMembersListItem from '../AttendingMembersListItem/AttendingMembersListItem';

class AttendingMembersList extends Component {
    state = {
        attending: [],
        error: null
    }

    componentDidMount() {
        this.fetchAttendingMembers(this.props.id);
    }


    fetchAttendingMembers = (id) => {
        this.setState({
            error: null
        })

        AdminApiService.getAttendingMembers(id)
            .then(res => {
                this.setState({
                    attending: res
                })
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { attending } = this.state
        const listItems = this.state.attending.map(member =>
            <AttendingMembersListItem key={member.id} name={member.full_name} phone={member.phone} email={member.email} attending={member.event_role} />
        )

        return (
            <section>
                <h3>Members Attending Event:</h3>
                <ul className="responsiveTable">
                    <AttendingMembersTableHeader />
                    {listItems}
                </ul>
            </section>
        );
    }
}

export default AttendingMembersList;

const AttendingMembersTableHeader = () => {
    return (
        <li className='tableHeader'>
            <div className='col col-1'>Name</div>
            <div className='col col-2'>Phone</div>
            <div className='col col-3'>Email</div>
            <div className='col col-4'>RSVP Status</div>
        </li>
    );
}