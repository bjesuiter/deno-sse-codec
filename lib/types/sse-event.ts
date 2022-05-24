/**
 * Note: Everything in this interface is optional, since the spec does not define
 * which properties need to be present in one single sse event.
 *
 * One could send only `data: ` lines or only `event: ` names.
 * So the user of this interface need to fill it's properties thoughtfully depending on the use-case.
 *
 * IMPORTANT: All other field names are ignored by SSE clients, otherwise they're non-standard!
 */
export interface SSEEvent {
  /**
   * The name of this SSE event
   */
  eventName?: string;

  /**
   * The data which should be transmitted as string (nothing other supported)
   */
  data?: string;

  /**
   * A unique id for this SSE event, which can be used to implement retry functionality
   * when the connection was lost while sse events where transmitting.
   */
  id?: string;

  /**
   * The reconnection time. If the connection to the server is lost,
   * the browser will wait for the specified time before attempting to reconnect.
   * This must be an integer, specifying the reconnection time in milliseconds.
   * If a non-integer value is specified, the field is ignored.
   */
  retry?: number;
}
