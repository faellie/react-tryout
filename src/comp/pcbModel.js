import React from 'react'

const PcbModel = ({ dataModel }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {dataModel.productionList.map((productionOrder) => (
                <div class="production-orders">
                    {productionOrder.pcbList.map((pcbEntry) => (
                            <div className="pcbEntry-body" >
                                <h5 className="pcb">{pcbEntry.pcb.orderId}</h5>
                                <h6 className="Count">{pcbEntry.pcb.count}</h6>
                            </div>
                            )
                        )
                    }

                </div>
            ))}
        </div>
    )
};

export default MyList
