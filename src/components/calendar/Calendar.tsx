import { CalendarApi, EventApi } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { useState } from "react";

type State = {
    weekendsVisible: boolean;
    currentEvents: EventApi[];
};

const initialState: State = {
    weekendsVisible: true,
    currentEvents: [],
};

const Calendar = () => {
    const [state, setState] = useState({ ...initialState });

    const handleDateSelect = (selectInfo: {
        view: { calendar: CalendarApi };
        startStr: string;
        endStr: string;
        allDay: boolean;
    }) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                // id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };

    const handleEventClick = (clickInfo: { event: { title: string; remove(): void } }) => {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    };

    const handleEvents = (events: EventApi[]) => {
        setState({ ...state, currentEvents: events });
    };

    const handleWeekendsToggle = () => {
        setState({
            ...state,
            weekendsVisible: !state.weekendsVisible,
        });
    };

    const renderEventContent = (eventInfo: { timeText: string; event: { title: string } }) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    };

    const renderSidebarEvent = (event: EventApi) => {
        return (
            <li key={event.id}>
                {/* <b>{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</b> */}
                <i>{event.title}</i>
            </li>
        );
    };

    const renderSidebar = () => {
        return (
            <div className="demo-app-sidebar">
                <div className="demo-app-sidebar-section">
                    <h2>Instructions</h2>
                    <ul>
                        <li>Select dates and you will be prompted to create a new event</li>
                        <li>Drag, drop, and resize events</li>
                        <li>Click an event to delete it</li>
                    </ul>
                </div>
                <div className="demo-app-sidebar-section">
                    <label>
                        <input type="checkbox" checked={state.weekendsVisible} onChange={handleWeekendsToggle}></input>
                        toggle weekends
                    </label>
                </div>
                <div className="demo-app-sidebar-section">
                    <h2>All Events ({state.currentEvents.length})</h2>
                    <ul>{state.currentEvents.map(renderSidebarEvent)}</ul>
                </div>
            </div>
        );
    };

    return (
        <div className="demo-app">
            {renderSidebar()}
            <div className="demo-app-main">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={state.weekendsVisible}
                    // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                />
            </div>
        </div>
    );
};
export default Calendar;
