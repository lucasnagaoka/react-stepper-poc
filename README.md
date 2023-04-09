# React Stepper PoC (with Vite 4 + TS + Jotai)

Just a small proof of concept to create a `Stepper` component and deal with state management across steps to submit data to an API in the last one.

---

### Remaining items:

- 🔜 Keep state between steps;
  - Possible solution:
    - We could create an atom called `requetBodyRawAtom` and set it using `onNext()` function. Inside the `Step` component, we could have this logic to set the requestBodyRawAtom, so we could keep the data for each step until the last one, when we will do the submit with another atom called `requestBodyAtom`, which will be the raw one, but parsed/formatted the way that the API expects;
- ✅ Display only the current step title. For other steps, display only the number;
