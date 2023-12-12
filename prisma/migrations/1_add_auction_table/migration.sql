
-- Create Table BID
CREATE TABLE "auction" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "subject_id" INT NOT NULL REFERENCES "account"("id"),
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auction_pkey" PRIMARY KEY ("id")
);

-- Create Index
CREATE UNIQUE INDEX "auction_id_key" ON "auction"("id");

-- Create Table BID
CREATE TABLE "bid" (
    "id" SERIAL NOT NULL,
    "bidder_id" INT NOT NULL REFERENCES "account"("id"),
    "auction_id" INT NOT NULL REFERENCES "auction"("id"),
    "amount" INT NOT NULL,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bid_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "fk_bidder_id" FOREIGN KEY ("bidder_id") REFERENCES account("id"),
    CONSTRAINT "fk_auction_id" FOREIGN KEY ("auction_id") REFERENCES auction("id")
);

-- Create Index
CREATE UNIQUE INDEX "bid_id_key" ON "bid"("id");
